pipeline {
    agent any
    stages {
        stage('Stage 1: git clone') {
            steps {
               bat "rmdir  /s /q shuffle-time"
                bat "git clone https://github.com/johnli1101/shuffle-time.git"
            }
        }
        stage('Stage 2: testing') {
            steps {
                bat "mvn install -f TicketBookingServiceJunitTesting"
            }
        }
        stage('test') {
            steps {
                bat "mvn test -f TicketBookingServiceJunitTesting"
            }
        }
        stage('package') {
            steps {
                bat "mvn package -f TicketBookingServiceJunitTesting"
            }
        }
    }
}