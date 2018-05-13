import React from 'react';

import { FacebookShareButton, GooglePlusShareButton, TwitterShareButton } from 'react-share';

const share = (props) => {
    let listClass;
    if (props.visible) {
        listClass = 'list isVisible';
    } else {
        listClass = 'list';
    }

    return (
        <div className="share">
            <div className={listClass}>
                {/* <p>Поделиться: </p> */}
                <ul>
                    <li>
                        <FacebookShareButton url={props.url}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 430 430">
                                <path d="M158.081 83.3v59.218h-43.385v72.412h43.385v215.183h89.122V214.936h59.805s5.601-34.721 8.316-72.685H247.54V92.74c0-7.4 9.717-17.354 19.321-17.354h48.557V.001h-66.021C155.878-.004 158.081 72.48 158.081 83.3z"/>
                            </svg>
                        </FacebookShareButton>
                    </li>
                    <li>
                        <TwitterShareButton url={props.url}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 612 612">
                                <path d="M612 116.258a250.714 250.714 0 0 1-72.088 19.772c25.929-15.527 45.777-40.155 55.184-69.411-24.322 14.379-51.169 24.82-79.775 30.48-22.907-24.437-55.49-39.658-91.63-39.658-69.334 0-125.551 56.217-125.551 125.513 0 9.828 1.109 19.427 3.251 28.606-104.326-5.24-196.835-55.223-258.75-131.174-10.823 18.51-16.98 40.078-16.98 63.101 0 43.559 22.181 81.993 55.835 104.479a125.556 125.556 0 0 1-56.867-15.756v1.568c0 60.806 43.291 111.554 100.693 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.199 117.253 87.194-42.947 33.654-97.099 53.655-155.916 53.655-10.134 0-20.116-.612-29.944-1.721 55.567 35.681 121.536 56.485 192.438 56.485 230.948 0 357.188-191.291 357.188-357.188l-.421-16.253c24.666-17.593 46.005-39.697 62.794-64.861z" />
                            </svg>
                        </TwitterShareButton>
                    </li>
                    <li>
                        <GooglePlusShareButton url={props.url}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                                <path d="M448 224v-64h-32v64h-64v32h64v64h32v-64h64v-32zM160 224v64h90.528c-13.216 37.248-48.8 64-90.528 64-52.928 0-96-43.072-96-96s43.072-96 96-96c22.944 0 45.024 8.224 62.176 23.168l42.048-48.256C235.424 109.824 198.432 96 160 96 71.776 96 0 167.776 0 256s71.776 160 160 160 160-71.776 160-160v-32H160z"/>
                            </svg>
                        </GooglePlusShareButton>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default share;