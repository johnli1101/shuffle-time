pipeline { 
    agent any
    
    options {
        skipStagesAfterUnstable()
    }
    
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Stage 1: Cloning Repo') { 
            steps { 
                echo 'stage one here'
                sh 'npm install'
            }
        }
        stage('Stage 2'){
            steps {
                echo 'stage two here'
            }
        }
        stage('Stage 3') {
            steps {
                echo 'stage three here'
            }
        }
    }
}