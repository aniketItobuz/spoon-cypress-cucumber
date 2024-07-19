pipeline {
    agent any

    tools {nodejs "nodejs22"}

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('e2e test') {
            steps {
                sh 'npm run runOnCloud'
            }
        }
    }
}