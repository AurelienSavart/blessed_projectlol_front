pipeline {
    agent any
    stages {
        stage('install') {
            steps {
                    dir('react-ts'){
                        withNPM(npmrcConfig: 'customNrpc') {
                                sh 'npm install'
                            }
                    }
            }
        }
    }
}
