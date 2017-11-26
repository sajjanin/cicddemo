pipeline {
  agent {
    docker {
      image 'node:alpine'
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