pipeline {
    agent any
    stages {
        stage('install') {
            steps {
                    dir('react-ts'){
                        withNPM() {
                                sh 'npm install'
                            }
                    }
            }
        }
    }
}
