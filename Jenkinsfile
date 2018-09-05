node { 

    stage('Clone git') {
        echo '-----Cloning GIT...-----'
    
	git 'https://github.com/AlenaYashchanka/new.git'
    }
     

    stage('install node_modules') {
        echo '-----install node_modules-----'
        bat 'npm install'
    }
    stage('Test') {
        echo '-----TEST-----'
        bat 'npm test'
    }

}