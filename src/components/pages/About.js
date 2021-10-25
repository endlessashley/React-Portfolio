import React from 'react';
import headshot from '../../images/portfolio-picture-921.jpeg'

export default function About() {
    return (
<div className="row align-items-center" id="about">
    
        <div className="col-xs-12 col-md-4" id="headshot-col"><img src={headshot} alt="headshot" className="img-responsive" id="headshot"/></div>
        <div className="col-xs-12 col-md-8">
            <p>Welcome! My name is Ashley Tate, and I’m a full-stack Web Developer with a flair for the front-end and a penchant for the back-end, 
            committed to integrating high functionality and effective user experience. With a certificate in full-stack web development from the University of Richmond,
            I excel in creative problem-solving and critical thinking, always eager to dive into the logic of a piece of code and dig to the bottom of every error message. 
                See Portfolio for examples of my work, and Skills for a list of my technical skills.</p>
            <p>In a former life, I earned a PhD from the University of Virginia where I honed my skills as an researcher and voracious learner of languages. 
            In my work as a program and special projects coordinator, I thrived while juggling multiple tasks and responsibilities to guide each project to successful completion. 
            In my work as a managing editor, I employed my eagle’s eye for detail and passion for finding the cleanest, most effective way to communicate in language–a crucial skill even (or especially!) when that language is Javascript. 
                I found my way to web development because I wanted a career where I could contribute my diverse set of technical and non-technical skills in a meaningful way–both for my company and for the users who will benefit from our work.</p>
            <p>When my fingers aren't busy coding, you can find them knitting, flipping through the pages of a graphic novel, or lacing up my running shoes.</p>
        </div>
</div>
    );
}