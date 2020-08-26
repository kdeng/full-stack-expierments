FROM docker.io/maven:3.6.3-jdk-11 as builder

WORKDIR /app
COPY ./src ./src
COPY ./pom.xml ./pom.xml
RUN mvn -U clean package

FROM docker.io/openjdk:11.0.6-jre-slim as runner
WORKDIR /app
COPY --from=builder /app/target/app.jar /app/app.jar
EXPOSE 8080

CMD ["java", "-noverify", "-Dserver.port=8080", "-Dspring.jmx.enabled=false", "-Dspring.devtools.add-properties=false", "--add-exports=java.base/jdk.internal.misc=ALL-UNNAMED", "--add-opens=java.base/java.nio=ALL-UNNAMED", "-jar", "/app/app.jar"]
