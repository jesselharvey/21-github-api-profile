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
  console.log(profileData)
  return (
    <div>
      <div id="nav">
        <button>Overview</button>
        <button>Repositories {profileData.public_repos} </button>
        <button>Projects</button>
        <button>Packages</button>
      </div>
      <div id="profileRepos">
        <div id="profileInfo">
          <img id="profilePic" src={profileData.avatar_url} />
          <span>{profileData.name}</span>
          <button>Edit Profile</button>
        <span>{profileData.followers} followers • {profileData.following} following</span>
          <span>{profileData.location}</span>
          <span>jesselharvey@gmail.com</span>
          {/* <span>{profileData.html_url}</span> */}
        </div>
        <Repos />
      </div>
    </div>
  )
}
