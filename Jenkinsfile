pipeline {
  agent {
    node {
      label 'dev'
    }
    
  }
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:alpine'
        }
        
      }
      steps {
        sh 'npm install'
      }
    }
  }
}