import React, { useEffect, useContext } from 'react'
import { Store } from '../../store/index'
import VideoPlay from '../VideoPlay/VideoPlay'
import Style from './VideoDetail.module.scss'
import Linkiify from 'react-linkify'

const VideoDetail = () => {
    const { globalState } = useContext(Store)
    return globalState.selected && globalState.selected.id ? (
        <div className={Style.wrap}>
           <VideoPlay id={globalState.selected.id} />
           <p>{globalState.selected.snippet.title}</p>
           <hr />
           <Linkiify>
                <pre>{globalState.selected.snippet.description}</pre>
            </Linkiify>
        </div>
    ) : (<span>No Data</span>)
}

export default VideoDetail
