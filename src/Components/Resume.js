import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';

const styles = theme => ({
  work: {
    margin: '10px 20px',
    padding: '30px 10px'
  },
});

class Resume extends Component {
  render() {
    const { classes } = this.props;

    if(this.props.data){
      var answer = this.props.data.answers.map(function(ans){
         return <div key={ans.title} className="row item">
            <div className="twelve columns">
               <h3>{ans.title}</h3>
               <p className="info">{ans.phrase} <span>&bull;</span> <em className="date">{ans.phraseBy}</em></p>
               <p dangerouslySetInnerHTML={{__html: ans.description}}/>
            </div>
         </div>
       });

      var education = this.props.data.education.map(function(edu){
         return <div key={edu.school} className="row item">
            <div className="twelve columns">
               <h3>{edu.school}</h3>
               <p className="info">{edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
               <p>
                 {edu.description}
               </p>
            </div>
         </div>
       });

      var work = this.props.data.work.map(function(job){
         return <div key={job.company} className="row item">
            <Card variant="outlined" className={classes.work}>
               <h3>{job.company}</h3>
               <p className="info">{job.title}<span>&bull;</span> <em className="date">{job.years}</em></p>
               <p>
               {job.description}
               </p>
            </Card>
         </div>
       });

      var skills = this.props.data.skills.map(function(skill){
         var className = 'bar-expand '+skill.name.toLowerCase();
         return <li key={skill.name}><span style={{width:skill.level}} className={className}></span><em>{skill.name}</em></li>
       });
    }
    return (
      <section id="resume">

         <div className="row answer">
            <div className="header-wrapper">
               <h1><span>Answers</span></h1><br />
            </div>
              {answer}
         </div>
         <div className="row education">
            <div className="header-wrapper">
               <h1><span>Education</span></h1><br />
            </div>
              {education}
         </div>
         <div className="row work">
            <div className="header-wrapper">
               <h1><span>Work</span></h1><br />
            </div>
              {work}
         </div>
         <div className="row skill">
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
               <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
               eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
               voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
               voluptatem sequi nesciunt.
               </p>
              <div className="bars">
                <ul className="skills">
                  {skills}
                </ul>
              </div>
            </div>
          </div>
          {this.props.children}
      </section>
    );
  }
}

export default withStyles(styles)(Resume);
