import "./detail.css"

const Detail = () => {
    return <div className="detail">
        <div className="user">
            <img src="./avatar.png" alt="" />
            <h2>Jane Doe</h2>
            <p>自我介紹，我是我，還是我，都是我。</p>
        </div>
        <div className="info">
            <div className="option">
                <div className="title">
                    <span>Chat Settings</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>
            <div className="option">
                <div className="title">
                    <span>Privacy & help</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>
            <div className="option">
                <div className="title">
                    <span>Shared photos</span>
                    <img src="./arrowDown.png" alt="" />
                </div>
                <div className="photos">
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="https://i.natgeofe.com/k/6d301bfc-ff93-4f6f-9179-b1f66b19b9b3/pig-young-closeup_3x4.jpg" alt="" />
                            <span>photo_2024_10.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon" />
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="https://i.natgeofe.com/k/6d301bfc-ff93-4f6f-9179-b1f66b19b9b3/pig-young-closeup_3x4.jpg" alt="" />
                            <span>photo_2024_10.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon" />
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="https://i.natgeofe.com/k/6d301bfc-ff93-4f6f-9179-b1f66b19b9b3/pig-young-closeup_3x4.jpg" alt="" />
                            <span>photo_2024_10.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon" />
                    </div>
                </div>
            </div>
            <div className="option">
                <div className="title">
                    <span>Shared Files</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>
            <button>Block User</button>
        </div>
    </div>
}

export default Detail