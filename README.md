# Links

A Spring Boot REST API implementing a simple "Links" chain game. Built as a Schonfeld take-home test.

A `Chain` is an ordered list of `Link`s, where each link holds an integer value. The API lets you create a chain of a given size (with randomly assigned link values) and remove links from either end of the chain.

## Features

- Initialize a chain with a configurable number of links, each assigned a random integer value (range -100 to 99).
- Remove a link from either the left or right side of a chain.
- Immutable domain modeled with Java `record` types (`Chain`, `Link`) and a `Side` enum.

## Tech Stack

- **Java 17**
- **Spring Boot 3.0.2** (`spring-boot-starter-web`, `spring-boot-starter-webflux`)
- **Lombok** (logging via `@Slf4j`)
- **Maven** (with the Maven Wrapper, `mvnw`)

## Project Structure

```
src/main/java/com/duic/Links/
├── LinksApplication.java                # Spring Boot entry point
├── controller/LinksGameController.java  # REST endpoints
├── service/LinksGame.java               # Game logic
├── model/Chain.java                     # Chain of links (record)
├── model/Link.java                      # Single link with an int value (record)
└── domain/Side.java                     # LEFT / RIGHT enum
```

## API Endpoints

| Method | Path                          | Description                                                                    |
|--------|-------------------------------|--------------------------------------------------------------------------------|
| GET    | `/initialize/{numberOfLinks}` | Create a new chain with the given number of randomly valued links.             |
| GET    | `/remove/{chain}/{side}`      | Remove a link from the given chain on the specified side (`LEFT` or `RIGHT`).  |

## How to Run

Prerequisites: JDK 17.

```bash
# Run with the Maven Wrapper
./mvnw spring-boot:run

# Or build a jar and run it
./mvnw clean package
java -jar target/Links-0.0.1-SNAPSHOT.jar
```

The application starts on the default port `8080`.

### Example

```bash
# Create a chain with 5 links
curl http://localhost:8080/initialize/5
```

## Tests

```bash
./mvnw test
```
