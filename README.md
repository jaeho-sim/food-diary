### Jenkins

https://jenkins.io/doc/tutorials/build-a-node-js-and-react-app-with-npm/

```
docker run \
  --rm \
  -u root \
  -p 8080:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  jenkinsci/blueocean
```
```sequelize model:create --name model_name --attributes title:string,complete:boolean```
```sequelize migration:create --name name_of_your_migration```