FROM openjdk:21
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
EXPOSE 8082
run java --version
CMD ["java","-jar", "management-0.0.1-SNAPSHOT.jar"]