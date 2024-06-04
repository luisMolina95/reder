FROM openjdk:latest
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
EXPOSE 8082
CMD ["java","-jar", "management-0.0.1-SNAPSHOT.jar"]