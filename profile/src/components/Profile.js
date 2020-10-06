import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../store/index"
import "./Profile.css"
import Repos from "./Repos"

export default () => {
  const dispatch = useDispatch()
  const profileData = useSelector((appState) => appState.profile)
  useEffect(() => {
    dispatch(getProfile())
  }, [])
  // console.log(profileData)
  return (
    <div id="profileRepos">
      <div id="profileInfo">
        <img className="profilePic" src={profileData.avatar_url} />
        <span>{profileData.name}</span>
        <span>{profileData.location}</span>
        {/* <span>{profileData.html_url}</span> */}
      </div>
      <div>
        <Repos />
      </div>
    </div>
  )
}
