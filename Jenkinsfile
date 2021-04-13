node ('Ubuntu-app-agent'){  
    //def app
    stage('Cloning Git') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    }  
    stage('SAST-SYNK'){
        build 'SECURITY-SAST-SNYK'
    }
    stage('SAST-SONAR'){
        build 'Sonar-Qube'
    }
    stage('Build-and-Tag') {
     /*   sh 'echo Build-andTag'*/
    /* This builds the actual image; synonymous to
         * docker build on the command line */
        app = docker.build("irivers1982/snake")
    }
    stage('Post-to-dockerhub') {
        sh 'echo Post-to-dockerhub'
     docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push("latest")
        			}
         }
    stage('SECURITY-IMAGE-SCANNER'){
        build 'SECURITY-IMAGE-SCANNER-ANCHORE'
    }
  
    
    stage('Pull-image-server') {
        /*sh 'echo Pull-image-server'*/
         sh "docker-compose down"
         sh "docker-compose up -d"	
      }
    
    stage('DAST')
        {
        build 'SECURITY-DAST-ARACHNI'
        }
 
}
