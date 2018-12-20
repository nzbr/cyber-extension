pipeline {
  agent any
  stages {
    stage('build') {
      agent {
        docker {
          image 'node:alpine'
        }

      }
      steps {
        sh 'npm install --global web-ext'
        sh 'web-ext build'
        archiveArtifacts 'web-ext-artifacts/*'
      }
    }
  }
}