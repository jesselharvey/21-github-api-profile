import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRepos } from "../store/index"
import "./Repos.css"

export default () => {
  const dispatch = useDispatch()
  const reposData = useSelector((appState) => appState.repos)
  // const reposData = {}
  useEffect(() => {
    dispatch(getRepos())
  }, [])
  console.log(reposData)
  return (
    <div id="repoContainer">
      
      {reposData.map((repo) => (
        <div>
          <a href={repo.html_url}>
            <span>{repo.name}</span>
          </a>
          <span>{repo.language}</span>
        </div>
      ))}
    </div>
  )
}
