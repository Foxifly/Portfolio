import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <article class="about" id="about">
        <h2>About Me</h2>
        <img
          class="about-me-pic"
          src="../resources/img/about-me.jpg"
          alt="picture of Lindsay Ciastko"
        />
        <p>
          {
            "In late 2011, I graduated high school wanting to be a physics major. I wanted to get a great career in a lab and be a renown scientist. I had confidence that I would find a career in my field easily after graduation. In early 2016, I graduated Albion College with my shiny new Bachelor's Degree. Little did I know that the job market really wasn't looking for a newbie physics major."
          }{" "}
        </p>
        <p>
          {
            "After spending some time struggling to find a job in physics, I decided to pick up coding to make the time go by quicker. I spent a great deal of time designing a small website and a chat bot for a music sharing platform known as plug.dj. At first, this site and bot were honestly nothing special. My website looked like something that was born in the 90ss, and my chat bot had minimal features and crashed constantly. But, for some reason, I wanted to continue to work on them."
          }
        </p>
        <p>
          {
            "As time passed, my website became more and more complex and beautiful and my chat bot completely transformed. Instead of running in a browser through a bookmarklet, I was able to redesign my bot using Node.js and run it on the command line. In my perspective, this was absolutely revolutionary! Soon after, I applied for a scholarship with Udacity sponsored by Google for a Front End Developer Nanodegree. I was awarded this scholarship for both the challenge course and the nanodegree itself. I am working on completing this nanodegree and I expect to be complete this upcoming October."
          }
        </p>
        <p>Goodbye science.</p>
        <p>
          <b>Hello development.</b>
        </p>
      </article>
    );
  }
}

export default AboutMe;
