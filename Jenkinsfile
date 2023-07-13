pipeline {
    agent any
    stages {
        stage('install') {
            steps {
                    dir('react-ts'){
                        withNPM(npmrcConfig: 'cutom-nrpc') {
                                sh 'npm install'
                            }
                    }
            }
        }
    }
}
