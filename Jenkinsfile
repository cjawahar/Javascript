pipeline {
    agent { docker { image 'node:12.16.0' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
