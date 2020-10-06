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
      <div id="searchDiv">
        <input type="text"></input>
        <select>
          <option value="type">Type</option>
        </select>
        <select>
          <option>Language</option>
        </select>
      </div>
      {reposData.map((repo) => (
        <div className="repo">
          <div className="nameDiv">
          <a className="name" href={repo.html_url}>
            <span>{repo.name}</span>
          </a>
          <button className="starBtn">Star</button>
          </div>
          <span>{repo.language}</span>
        </div>
      ))}
    </div>
  )
}
