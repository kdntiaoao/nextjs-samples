import useSWR, { Fetcher } from 'swr'
import { FetcherResponse } from 'swr/_internal'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

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
