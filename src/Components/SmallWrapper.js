import Button from './Button'
import React from 'react'
import './SmallWrapper.scss'

function SmallWrapper() {
    return (
        <div id="smallWrapper">
            <div className="bg-text">About</div>

            <div className="small-wrapper">
                <h3>We Design every Project with Absolute Perfection</h3>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <div className="col-12 col-md-6">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>    
                    </div>
                </div>

                <Button/>
            </div>
        </div>
    )
}

export default SmallWrapper
