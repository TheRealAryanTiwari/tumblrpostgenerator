import { staticFile } from "remotion";

const postStyle: React.CSSProperties = {
    width: 364, 
    minHeight: 100, 
    height: "auto", 
    backgroundColor: "#222222",
    zoom: 1.3,
    borderRadius: 8,
    fontFamily: "Helvetica",
    lineHeight: 0,
    margin: 0,
    padding: 0,
    display: "block",
    verticalAlign: "baseline",
    border: "none",
    position: "absolute",
    fontSize: 14
}

const header: React.CSSProperties = {
    padding: 16,
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    width: "100%",
}

const pfp: React.CSSProperties = {
    width: 32,
    height: 34.8,
    marginRight: 10,
}

const postInfo: React.CSSProperties = {
    display: "flex", 
    flexDirection: "column",
    justifyContent: "center", 
    fontWeight: 700,
    columnGap: 4,
    width: 250
}

const postText: React.CSSProperties = {
    color:"white",
    fontSize: 18,
    textAlign: "left",
    fontWeight: 400,
    marginBottom: 12,
    lineHeight: "28px",
    wordBreak: "break-word",
    whiteSpaceCollapse: "preserve",
    verticalAlign: "baseline",
    textWrap: "wrap",
    marginTop: -3
}

const username: React.CSSProperties = {
    color: "white",  
    marginRight: 6, 
}

const verifiedLogo: React.CSSProperties = {
    width: 15, 
    height: 15,  
    marginRight: 6
}

const divWithPosterInfo: React.CSSProperties = {
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center"
}

const followText: React.CSSProperties = {
    color: "rgb(0, 184, 255)", 
    fontWeight: 600,
}

const dateDiv: React.CSSProperties = {
    marginBottom: -4,
    marginTop: -13,
    fontWeight: 400,
    color: "rgba(255, 255, 255, 0.65)"
}

const elipsis: React.CSSProperties = {
    width: 40, 
    height: 40, 
    color: "#B2B2B2", 
}

const postDiv: React.CSSProperties = {
    marginBottom: 15, 
    paddingRight: 16, 
    paddingLeft: 16
}

export const TumblrPost: React.FC<{
    post: string
  }> = ({ post }) => {
    return (
        <div style={postStyle}>
            <header style={header}>
                <img src={staticFile("grassblock.png")} style={pfp}/>
                <div style={ postInfo }>
                    <div style={divWithPosterInfo}>
                        <p style={username}>minermines</p>
                        <img src={staticFile("verified.png")} style={verifiedLogo}/>
                        <p style={followText}>Follow</p>
                    </div>
                    <div style={dateDiv}>
                        <p>Apr 4</p>
                    </div>
                </div>
                <img src={staticFile("elipsis.png")} 
                    style={elipsis}/>
            </header>
            <article style={postDiv}>
                <p style={postText}>
                    {post}
                </p>
            </article>
        </div>
    )
};