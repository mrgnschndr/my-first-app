import React, { Component } from 'react';
// CSS file
import './Post.css';
// from FA docs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-regular';
import { faComment } from '@fortawesome/fontawesome-free-regular';
import { faPaperPlane } from '@fortawesome/fontawesome-free-regular';
import { faBookmark } from '@fortawesome/fontawesome-free-regular';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';



class Post extends Component {
    render() {
        return(
        <div id="post-wrap">
            <div>
                {/* Add 32x32 profile image to match instagram.com mobile view */}
                <img src="https://placehold.co/32"></img>
                <div>
                    <h3>username</h3>
                    <h4>location</h4>
                </div>
                <FontAwesomeIcon icon={faEllipsis} class="interact" />
            </div>
            <img src="https://placehold.co/400" alt="Placeholder image" />
            <div>
                <div>
                    <FontAwesomeIcon icon={faHeart} class="interact" />
                    {/* <p></p> */}
                    <FontAwesomeIcon icon={faComment} class="interact" />
                    {/* <p></p> */}
                    <FontAwesomeIcon icon={faPaperPlane} class="interact" />
                    {/* <p></p> */}
                </div>
                <div>
                    <FontAwesomeIcon icon={faBookmark} class="interact" />
                </div>
            </div>
        </div>  
        )
    }
};




export default Post;