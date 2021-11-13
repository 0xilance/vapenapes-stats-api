import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr('/api', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
    <h1>Vapenapes 🙈</h1>
    <ul>
      {data.map((idx, entry) => (
        <li key={[idx, "x"].join("-")}>
          <p>
            <span>{JSON.stringify(entry)}</span>
          </p>
        </li>
      ))}
    </ul>
    </>
  )
}