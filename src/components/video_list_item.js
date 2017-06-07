import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    const imgURL = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    
    return(
    <li onClick={()=>props.onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imgURL}/>
            </div>
            <div className="media-body">
                <div className="mdeia-heading">{videoTitle}</div>
            </div>
        </div>
    </li>
    );
}

export default VideoListItem;