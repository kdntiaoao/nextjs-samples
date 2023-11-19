import type { Post } from '@/types'
import useSWR from 'swr'
import { FetcherResponse } from 'swr/_internal'

const fetcher = <T>(url: string): FetcherResponse<T> => fetch(url).then((res) => res.json())

export const usePosts = () => {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher<Post[]>)

  return {
    posts: data,
    error,
    isLoading,
  }
}

export const usePost = (id: string) => {
  const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`, fetcher<Post>)

  return {
    post: data,
    error,
    isLoading,
  }
}
