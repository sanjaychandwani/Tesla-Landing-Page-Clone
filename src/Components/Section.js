import React from 'react';

function Section(props) {
  return (
    <div>
      <section className='section' style={{ backgroundImage: props.isVideo ? 'none' : `url("images/${props.bgImg}")` }}>
        {props.isVideo && (
          <video className="video-background" autoPlay muted loop>
            <source src="videos/Model-S-video.webm" type="video/mp4" />
          </video>
        )}

        <div className="textarea">
          <div style={props.color === "white" ? { color: "white" } : {color:"black"}} className='model'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
          </div>

          <div className='buttons'>
            {props.rightbtn && <a href=''>{props.rightbtn}</a>}
            <a href=''>{props.leftbtn}</a>
          </div>
        </div>

        <div className='downarrow'>
          {props.ico && <img src='images/down-arrow.svg' className='arrow' />}
        </div>
      </section>
    </div>
  );
}

export default Section;
