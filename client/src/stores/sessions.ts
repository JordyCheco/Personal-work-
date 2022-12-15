import router from "@/router";
import myFetch from "@/services/myFetch";
import { computed, reactive } from "vue";
import type { User } from "./Login_type";
const session = reactive( {
    user: null as User | null,
    loading: 0,
    error: null as string | null,
    messages: [] as Message[],
});


export function setError(error: string | null) {
    session.error = error;
    if(error){
        session.messages.push({ type: 'danger', text: error});
    }
}

export const isLoading = computed(() => !! session.loading);

export async function api<T>(url: string, data: any = null, method?: string ){
    session.loading++;
    setError(null);
    try {
        return await myFetch<T>(url, data, method);
    } catch (error:any) {
        setError(error.message ?? error as string);
        throw error;
    }finally{
        session.loading--;
    }
    return {} as T;
}


export async function login( email: string, password: string) {
    const user = await api<User>('/api/login', { email, password }, 'POST');
    session.user = user;
    router.push('/');
}

export function logout() {
    session.user = null;
}



export interface Message {
    text: string;
    type: 'danger' | 'warning' | 'success' | 'info';
}

export async function signup( email: string, password: string) {
    const user = await api<User>('/api/register', { email, password }, 'POST');
    session.user = user;
    router.push('/login');
}

export default session;
