import { useState } from "react"
import { useAppSelector } from "../libs/Store"
import { Todo } from "../interface"

interface UseSearchListProps {
  handleSearch: (text: string) => void
  searchText: string
  searchResults: Todo[]
}

const useSearchList = (): UseSearchListProps => {
  const [searchText, setSearchText] = useState<string>("")
  const [searchResults, setSearchResults] = useState<Todo[]>([])
  const lists = useAppSelector((state) => state.app.todos)

  const handleSearch = (text: string) => {
    setSearchText(text)
    const filteredResults = lists.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    )
    setSearchResults(filteredResults)
  }

  return {
    handleSearch,
    searchText,
    searchResults,
  }
}

export default useSearchList
