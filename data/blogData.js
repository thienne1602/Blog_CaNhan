// Blog posts data
export const blogPosts = [
  {
    id: 1,
    title: "Cấu trúc dữ liệu ArrayList trong Java - Tối ưu hóa hiệu suất",
    slug: "cau-truc-du-lieu-arraylist-trong-java",
    excerpt:
      "Tìm hiểu cơ chế hoạt động, độ phức tạp và chiến lược tối ưu hóa cho ArrayList giúp ứng dụng Java phản hồi nhanh hơn.",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    content: `
# Cấu trúc dữ liệu ArrayList trong Java - Tối ưu hóa hiệu suất

ArrayList là cấu trúc dữ liệu phổ biến trong Java Collection Framework. Việc nắm rõ cách nó hoạt động giúp bạn tránh những bottleneck không đáng có khi xử lý dữ liệu lớn.

## ArrayList hoạt động như thế nào?

* Dựa trên mảng động (dynamic array).
* Tự động tăng kích thước theo \`capacity * 1.5\` khi đầy.
* Truy cập theo index có độ phức tạp O(1).

## Ví dụ khởi tạo và thao tác cơ bản

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class ArrayListExample {
        public static void main(String[] args) {
                List<String> topics = new ArrayList<>(16); // Gán capacity ban đầu
                topics.add("HTTP");
                topics.add("WebSocket");
                topics.add("gRPC");

                topics.remove("HTTP");

                System.out.println("Chủ đề đầu tiên: " + topics.get(0));
        }
}
\`\`\`

## Khi nào nên dùng ArrayList?

| Trường hợp | ArrayList | LinkedList |
|-----------|-----------|------------|
| Truy cập ngẫu nhiên | ⭐⭐⭐⭐⭐ | ⭐ |
| Chèn/xóa ở giữa | ⭐⭐ | ⭐⭐⭐⭐ |
| Bộ nhớ | ⭐⭐⭐ | ⭐⭐ |

## 3 mẹo nâng cao

1. **Khởi tạo với capacity phù hợp** để giảm số lần resize.
2. **Sử dụng \`ensureCapacity\`** khi biết trước số phần tử cần thêm.
3. **Tránh boxing/unboxing** bằng cách ưu tiên kiểu dữ liệu nguyên thủy và Java 8 Streams.

\`\`\`java
var numbers = new ArrayList<Integer>();
IntStream.range(0, 10_000).forEach(numbers::add);
\`\`\`

## Kết luận

ArrayList là lựa chọn lý tưởng cho các tác vụ đọc nhiều, ghi ít. Khi cần thao tác chèn/xóa liên tục, hãy cân nhắc chuyển sang \`LinkedList\` hoặc \`CopyOnWriteArrayList\` tùy bài toán.

> **Tài liệu nên đọc**: [Oracle Java Collections](https://docs.oracle.com/javase/8/docs/technotes/guides/collections/).
`,
    author: "Thạch Văn Ngọc Thiên",
    date: "2024-10-10",
    readTime: "5 phút đọc",
    tags: ["Java", "Data Structure", "Performance"],
    category: "Java",
    level: "Intermediate",
    references: [
      "https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html",
      "https://www.baeldung.com/java-arraylist",
    ],
  },
  {
    id: 2,
    title: "JavaScript Async/Await - Xử lý bất đồng bộ hiện đại",
    slug: "javascript-async-await-xu-ly-bat-dong-bo",
    excerpt:
      "Từ callback hell đến async/await: cách viết mã bất đồng bộ trong JavaScript gọn gàng, dễ debug cho ứng dụng thời gian thực.",
    heroImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
    content: `
# JavaScript Async/Await - Xử lý bất đồng bộ hiện đại

Nếu bạn từng vật lộn với callback hell hoặc Promise chaining, async/await chính là cứu tinh. Dưới đây là lộ trình áp dụng async/await cho ứng dụng web thời gian thực.

## Callback hell trông như thế nào?

\`\`\`javascript
getProfile(userId, function(profile) {
    getCourses(profile.id, function(courses) {
        enrollCourse(courses[0], function(result) {
            console.log(result);
        });
    });
});
\`\`\`

## Chuyển sang async/await

\`\`\`javascript
async function enrollFirstCourse(userId) {
    try {
        const profile = await getProfile(userId);
        const courses = await getCourses(profile.id);
        const result = await enrollCourse(courses[0]);
        return result;
    } catch (error) {
        console.error('Enroll failed', error);
        throw error;
    }
}

enrollFirstCourse('sv-hutech-001')
    .then(console.log)
    .catch(console.error);
\`\`\`

## 3 kỹ thuật quan trọng

1. **Promise.all** để chạy song song các call độc lập.
2. **Promise.race** để set timeout.
3. **Retry strategy** khi gặp lỗi mạng tạm thời.

\`\`\`javascript
async function fetchWithRetry(url, options, retry = 3) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Request failed');
        return response.json();
    } catch (error) {
        if (retry <= 0) throw error;
        await new Promise(res => setTimeout(res, 2 ** (3 - retry) * 100));
        return fetchWithRetry(url, options, retry - 1);
    }
}
\`\`\`

## Lưu ý khi dùng với vòng lặp

\`\`\`javascript
// ❌ Thực thi tuần tự (chậm)
for (const url of urls) {
    const result = await fetch(url);
    handle(result);
}

// ✅ Thực thi song song
const results = await Promise.all(urls.map(fetch));
results.forEach(handle);
\`\`\`

## Kết luận

Async/await làm code bất đồng bộ trở nên tuyến tính, dễ đọc, đặc biệt phù hợp khi xây dựng API Client hoặc real-time dashboard.

> **Video gợi ý**: [Jake Archibald - Async & Await](https://www.youtube.com/watch?v=568g8hxJJp4).
`,
    author: "Thạch Văn Ngọc Thiên",
    date: "2024-10-08",
    readTime: "7 phút đọc",
    tags: ["JavaScript", "Async", "ES6", "Performance"],
    category: "JavaScript",
    level: "Beginner",
    references: [
      "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await",
      "https://javascript.info/async-await",
    ],
  },
  {
    id: 3,
    title: "Xây dựng RESTful API với Java Spring Boot",
    slug: "xay-dung-restful-api-voi-java-spring-boot",
    excerpt:
      "Thiết kế RESTful API đầy đủ CRUD, validation, exception handling và test tích hợp với Spring Boot chỉ trong một buổi tối.",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    content: `
# Xây dựng RESTful API với Java Spring Boot

Hệ thống backend chất lượng cần có API mạnh mẽ, dễ mở rộng. Cùng xây dựng một module quản lý sinh viên với Spring Boot.

## Kiến trúc tổng quan

* **Entity**: ánh xạ bảng dữ liệu.
* **Repository**: thao tác database.
* **Service**: xử lý nghiệp vụ, validation.
* **Controller**: expose REST endpoint.

## Entity mẫu

\`\`\`java
@Entity
@Table(name = "students")
public class Student {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @NotBlank
        private String fullName;

        @Email
        private String email;

        @Enumerated(EnumType.STRING)
        private Major major;

        @CreationTimestamp
        private LocalDateTime createdAt;
}
\`\`\`

## Controller REST

\`\`\`java
@RestController
@RequestMapping("/api/students")
public class StudentController {

        private final StudentService service;

        public StudentController(StudentService service) {
                this.service = service;
        }

        @GetMapping
        public List<StudentResponse> getAll(@RequestParam(required = false) String keyword) {
                return service.search(keyword);
        }

        @PostMapping
        public ResponseEntity<StudentResponse> create(@Valid @RequestBody StudentRequest request) {
                StudentResponse student = service.create(request);
                URI location = ServletUriComponentsBuilder
                        .fromCurrentRequest()
                        .path("/{id}")
                        .buildAndExpand(student.id())
                        .toUri();
                return ResponseEntity.created(location).body(student);
        }
}
\`\`\`

## Exception handler gọn gàng

\`\`\`java
@RestControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    ResponseEntity<ApiError> handleValidation(MethodArgumentNotValidException ex) {
        var errors = ex.getBindingResult().getFieldErrors().stream()
                .map(error -> Map.of(
                        "field", error.getField(),
                        "message", error.getDefaultMessage()))
                .toList();

        return ResponseEntity.badRequest()
                .body(new ApiError("VALIDATION_FAILED", errors));
    }
}
\`\`\`

## Checklist trước khi deploy

1. Bật **Actuator** để quan sát.
2. Thêm **OpenAPI** (springdoc) để generate docs.
3. Cấu hình **Flyway** để quản lý schema.

> **Demo repo**: [Spring Boot REST Starter](https://github.com/spring-projects/spring-petclinic).
`,
    author: "Thạch Văn Ngọc Thiên",
    date: "2024-10-05",
    readTime: "10 phút đọc",
    tags: ["Java", "Spring Boot", "REST API", "Clean Architecture"],
    category: "Java",
    level: "Intermediate",
    references: [
      "https://spring.io/projects/spring-boot",
      "https://springdoc.org/",
    ],
  },
  {
    id: 4,
    title: "Realtime chat với Spring Boot WebSocket và STOMP",
    slug: "realtime-chat-voi-spring-boot-websocket-stomp",
    excerpt:
      "Kết nối hai chiều giữa client và server bằng Spring WebSocket + STOMP, triển khai chat room cho môn Lập trình mạng.",
    heroImage:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
    content: `
# Realtime chat với Spring Boot WebSocket và STOMP

Trong các môn học lập trình mạng, WebSocket là kỹ thuật không thể thiếu để xây dựng ứng dụng realtime. Hãy tạo một chat room mini dành cho lớp học.

## Cấu hình WebSocket

\`\`\`java
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws")
                .setAllowedOrigins("https://thien.blog")
                .withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/topic");
        registry.setApplicationDestinationPrefixes("/app");
    }
}
\`\`\`

## Controller nhận và broadcast tin nhắn

\`\`\`java
@Controller
public class ChatController {

    @MessageMapping("/chat.send")
    @SendTo("/topic/public")
    public ChatMessage send(ChatMessage message) {
        message.setTimestamp(Instant.now());
        return message;
    }
}
\`\`\`

## Client React sử dụng SockJS + StompJS

\`\`\`javascript
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

const socket = new SockJS('https://api.thien.blog/ws');
const stompClient = over(socket);

stompClient.connect({}, () => {
    stompClient.subscribe('/topic/public', payload => {
        const message = JSON.parse(payload.body);
        renderMessage(message);
    });
});

function sendMessage(content) {
    stompClient.send('/app/chat.send', {}, JSON.stringify({
        sender: 'Thiên',
        content
    }));
}
\`\`\`

## Bảo mật cơ bản

* Thêm **JWT** vào header STOMP.
* Giới hạn origin trong \`setAllowedOrigins\`.
* Cấu hình \`ChannelInterceptor\` để validate user.

> **Tài nguyên thêm**: [Spring WebSocket Messaging](https://docs.spring.io/spring-framework/reference/web/websocket.html).
`,
    author: "Thạch Văn Ngọc Thiên",
    date: "2024-09-28",
    readTime: "9 phút đọc",
    tags: ["Java", "WebSocket", "Spring", "Realtime"],
    category: "Java",
    level: "Advanced",
    references: [
      "https://docs.spring.io/spring-framework/reference/web/websocket.html",
      "https://stomp.github.io/stomp-specification-1.2.html",
    ],
  },
  {
    id: 5,
    title: "Socket.IO - Xây dựng hệ thống thông báo realtime với Node.js",
    slug: "socket-io-thong-bao-realtime-nodejs",
    excerpt:
      "Socket.IO giúp đồng bộ thông báo giữa client và server chỉ với vài dòng code. Hãy dựng notification hub phục vụ dự án tốt nghiệp.",
    heroImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    content: `
# Socket.IO - Xây dựng hệ thống thông báo realtime với Node.js

Node.js + Socket.IO là combo mạnh mẽ để xử lý kết nối thời gian thực, đặc biệt cho dashboard theo dõi trạng thái mạng.

## Server Socket.IO

\`\`\`javascript
import { createServer } from 'http';
import { Server } from 'socket.io';
import express from 'express';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: 'https://thien.blog',
        methods: ['GET', 'POST']
    }
});

io.on('connection', socket => {
    console.log('Client connected', socket.id);

    socket.on('join', room => {
        socket.join(room);
    });

    socket.on('notify', payload => {
        io.to(payload.room).emit('notification', payload);
    });
});

httpServer.listen(4000);
\`\`\`

## Client React hook

\`\`\`javascript
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const useNotificationHub = room => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const socket = io('https://api.thien.blog', { transports: ['websocket'] });
        socket.emit('join', room);

        socket.on('notification', payload => {
            setNotifications(current => [payload, ...current]);
        });

        return () => socket.disconnect();
    }, [room]);

    return notifications;
};
\`\`\`

## Best practice

* Dùng **Redis Adapter** khi scale nhiều instance.
* Theo dõi **socket rooms** bằng namespace.
* Tạo fallback dùng HTTP long-polling khi WebSocket bị chặn.

> **Đọc thêm**: [Socket.IO docs](https://socket.io/docs/v4/).
`,
    author: "Thạch Văn Ngọc Thiên",
    date: "2024-09-22",
    readTime: "8 phút đọc",
    tags: ["JavaScript", "Node.js", "Socket.IO", "Realtime"],
    category: "JavaScript",
    level: "Intermediate",
    references: [
      "https://socket.io/docs/v4/",
      "https://redis.io/docs/interact/clients/socketio/",
    ],
  },
  {
    id: 6,
    title: "Giám sát ứng dụng Java với Micrometer và Prometheus",
    slug: "giam-sat-java-voi-micrometer-prometheus",
    excerpt:
      "Không đo thì không tối ưu được: hướng dẫn tích hợp Micrometer, Prometheus và Grafana để theo dõi độ trễ API, throughput.",
    heroImage:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1600&q=80",
    content: `
# Giám sát ứng dụng Java với Micrometer và Prometheus

Monitoring là kỹ năng bắt buộc của lập trình viên backend. Bài viết hướng dẫn cấu hình Spring Boot export metrics ra Prometheus và visualize bằng Grafana.

## Thêm dependency

\`\`\`xml
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-registry-prometheus</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
\`\`\`

## Cấu hình Actuator

\`\`\`properties
management.endpoints.web.exposure.include=health,info,prometheus
management.endpoint.prometheus.enabled=true
management.metrics.distribution.percentiles-histogram.http.server.requests=true
\`\`\`

## Đo độ trễ API tùy chỉnh

\`\`\`java
@RestController
public class PingController {

    private final MeterRegistry meterRegistry;

    public PingController(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
    }

    @GetMapping("/api/ping")
    public String ping() {
        Timer.Sample sample = Timer.start();
        try {
            return "pong";
        } finally {
            sample.stop(Timer.builder("http.ping")
                .description("Latency cho endpoint ping")
                .register(meterRegistry));
        }
    }
}
\`\`\`

## Prometheus scrape config

\`\`\`yaml
scrape_configs:
    - job_name: 'spring-boot'
        metrics_path: '/actuator/prometheus'
        static_configs:
            - targets: ['spring:8080']
\`\`\`

## Dashboard gợi ý

* Latency theo percentiles (p50/p95/p99).
* Request throughput theo HTTP status.
* Memory heap/non-heap.

> **Template dashboard**: [Grafana 4701](https://grafana.com/grafana/dashboards/4701-spring-boot-statistics/).
`,
    author: "Thạch Văn Ngọc Thiên",
    date: "2024-09-15",
    readTime: "11 phút đọc",
    tags: ["Java", "Observability", "Prometheus", "Grafana"],
    category: "Java",
    level: "Advanced",
    references: [
      "https://micrometer.io/docs",
      "https://prometheus.io/docs/prometheus/latest/getting_started/",
    ],
  },
  {
    id: 7,
    title:
      "Caching API với Spring Boot và Redis để giảm 60% thời gian phản hồi",
    slug: "caching-api-spring-boot-redis",
    excerpt:
      "Bổ sung Redis Cache giúp API phản hồi nhanh, giảm tải database. Đây là bước tối ưu quan trọng cho các hệ thống xử lý nhiều request.",
    heroImage:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80",
    content: `
# Caching API với Spring Boot và Redis để giảm 60% thời gian phản hồi

Redis cache giúp giảm áp lực lên database, đặc biệt khi bạn có những endpoint đọc nhiều, ghi ít.

## Cấu hình RedisTemplate

\`\`\`java
@Configuration
@EnableCaching
public class RedisConfig {

    @Bean
    public RedisConnectionFactory connectionFactory() {
        return new LettuceConnectionFactory("localhost", 6379);
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory factory) {
        var template = new RedisTemplate<String, Object>();
        template.setConnectionFactory(factory);
        template.setKeySerializer(new StringRedisSerializer());
        template.setValueSerializer(new GenericJackson2JsonRedisSerializer());
        return template;
    }
}
\`\`\`

## Áp dụng cache cho Service layer

\`\`\`java
@Service
public class CourseService {

    @Cacheable(value = "popularCourses", key = "#major")
    public List<CourseResponse> getPopularCourses(String major) {
        // Query tốn kém từ database
        simulateSlowQuery();
        return courseRepository.findTop5ByMajorOrderByEnrollmentsDesc(major)
                .stream()
                .map(CourseMapper::toResponse)
                .toList();
    }

    @CacheEvict(value = "popularCourses", allEntries = true)
    public void invalidatePopularCourses() {
        // Gọi sau khi cập nhật dữ liệu
    }
}
\`\`\`

## Giám sát cache hit/miss

\`\`\`properties
management.metrics.enable.redis=true
management.endpoint.metrics.enabled=true
\`\`\`

Khi đó bạn có thể truy cập \`/actuator/metrics/cache.gets\` để xem tỉ lệ hit/miss.

> **Tip**: Dùng Redis TTL phù hợp để tránh cache stale. Thường nên đặt TTL ngắn (5-15 phút) cho dữ liệu biến động.
`,
    author: "Thạch Văn Ngọc Thiên",
    date: "2024-09-08",
    readTime: "8 phút đọc",
    tags: ["Java", "Redis", "Caching", "Spring"],
    category: "Java",
    level: "Intermediate",
    references: [
      "https://docs.spring.io/spring-framework/reference/integration/cache.html",
      "https://redis.io/docs/latest/develop/use/key-expiration/",
    ],
  },
  {
    id: 8,
    title: "CI/CD cho ứng dụng Spring Boot với GitHub Actions",
    slug: "ci-cd-spring-boot-github-actions",
    excerpt:
      "Thiết lập pipeline build, test và deploy tự động lên GitHub Pages/Render chỉ với một workflow yml.",
    heroImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    content: `
# CI/CD cho ứng dụng Spring Boot với GitHub Actions

Triển khai tự động giúp dự án cá nhân luôn sẵn sàng demo. Workflow dưới đây build, test và deploy Docker image lên Render.

## Workflow mẫu

\`\`\`yaml
name: spring-ci

on:
    push:
        branches: [ main ]

jobs:
    build:
        runs-on: ubuntu-latest

        steps:
            - uses: actions/checkout@v3
            - name: Set up JDK 21
                uses: actions/setup-java@v3
                with:
                    distribution: temurin
                    java-version: '21'
            - name: Cache Maven packages
                uses: actions/cache@v3
                with:
                    path: ~/.m2
                    key: \${{ runner.os }}-maven-\${{ hashFiles('**/pom.xml') }}
            - name: Run tests
                run: mvn -B verify
            - name: Build Docker image
                run: docker build -t ghcr.io/thienne1602/blog-api:\${{ github.sha }} .
            - name: Push image
                run: |
                    echo \${{ secrets.GHCR_TOKEN }} | docker login ghcr.io -u thienne1602 --password-stdin
                    docker push ghcr.io/thienne1602/blog-api:\${{ github.sha }}
\`\`\`

## Thêm bước deploy

* Dùng Render/GCP Cloud Run để chạy container.
* Trigger redeploy bằng webhook sau khi push image.

> **Học thêm**: [GitHub Actions for Java](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-java-with-gradle) và [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).
`,
    author: "Thạch Văn Ngọc Thiên",
    date: "2024-09-01",
    readTime: "6 phút đọc",
    tags: ["DevOps", "CI/CD", "GitHub Actions", "Java"],
    category: "DevOps",
    level: "Intermediate",
    references: [
      "https://docs.github.com/en/actions",
      "https://render.com/docs/deploy-docker",
    ],
  },
  {
    id: 9,
    title: "GraphQL API với Apollo Server và React Client",
    slug: "graphql-api-apollo-server-react-client",
    excerpt:
      "Hướng dẫn kết hợp Apollo Server (Node.js) và Apollo Client (React) cho ứng dụng dashboard thời gian thực.",
    heroImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80",
    content: `
# GraphQL API với Apollo Server và React Client

GraphQL giúp frontend chỉ lấy đúng dữ liệu cần thiết, giảm bandwidth và tối ưu hiệu năng. Đây là kiến trúc phù hợp cho dashboard thống kê mạng.

## Apollo Server cơ bản

\`\`\`javascript
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = \`
    type Course {
        id: ID!
        title: String!
        level: String!
        tags: [String!]!
    }

    type Query {
        courses(level: String): [Course!]!
    }
\`;

const courses = [
    { id: '1', title: 'Spring Cloud Fundamentals', level: 'ADVANCED', tags: ['Java', 'Cloud'] },
    { id: '2', title: 'Async JS Deep Dive', level: 'INTERMEDIATE', tags: ['JavaScript'] }
];

const resolvers = {
    Query: {
        courses: (_, args) => args.level ? courses.filter(c => c.level === args.level) : courses,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, { listen: { port: 4000 } });
\`\`\`

## React Client với Apollo Client

\`\`\`javascript
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api.thien.blog/graphql',
    cache: new InMemoryCache(),
});

const GET_COURSES = gql\`
    query Courses($level: String) {
        courses(level: $level) {
            id
            title
            tags
        }
    }
\`;

export function CoursesList() {
    const { data, loading } = useQuery(GET_COURSES, { variables: { level: 'INTERMEDIATE' } });

    if (loading) return <p>Đang tải...</p>;

    return (
        <ul>
            {data.courses.map(course => (
                <li key={course.id}>{course.title} - {course.tags.join(', ')}</li>
            ))}
        </ul>
    );
}
\`\`\`

## Lợi ích chính

* **Giảm số lượng request** nhờ batching.
* **Phân quyền linh hoạt** bằng Schema Directive.
* **Subscriptions** hỗ trợ realtime qua WebSocket.

> **Nên đọc**: [Apollo GraphQL Docs](https://www.apollographql.com/docs/).
`,
    author: "Thạch Văn Ngọc Thiên",
    date: "2024-08-25",
    readTime: "9 phút đọc",
    tags: ["JavaScript", "GraphQL", "React", "API"],
    category: "JavaScript",
    level: "Intermediate",
    references: [
      "https://www.apollographql.com/docs/",
      "https://graphql.org/learn/",
    ],
  },
];

export const categories = ["All", "Java", "JavaScript", "DevOps", "Realtime"];

export const allTags = [
  "Java",
  "JavaScript",
  "Spring Boot",
  "REST API",
  "WebSocket",
  "Node.js",
  "Socket.IO",
  "Redis",
  "Performance",
  "Prometheus",
  "Grafana",
  "CI/CD",
  "DevOps",
  "GraphQL",
  "React",
  "Observability",
  "Caching",
  "API",
  "Database",
  "Security",
  "Testing",
  "Data Structure",
  "Algorithm",
  "Design Pattern",
  "Architecture",
  "Frontend",
  "Backend",
  "Fullstack",
];
