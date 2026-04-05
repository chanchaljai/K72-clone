import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1775387294~exp=1775390894~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=a9b14ddc3e9b363889be8ad61cd383003f8376cc6d5b0ec8d9aa9bdd2b4226f4&r=dXMtZWFzdDE%3D"></video>
    </div>
  )
}

export default Video