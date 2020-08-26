package nz.co.westpac;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;

/**
 * @author Kefeng Deng (deng@51any.com)
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class ApplicationTest {

  @Autowired
  private ApplicationContext context;

  private WebTestClient webClient;

  @Before
  public void setup() {
    webClient = WebTestClient
      .bindToApplicationContext(context)
      .configureClient()
      .baseUrl("http://localhost:9191")
      .build();
  }

  @Test
  public void shouldPerformHealthCheckWithProperResponseBody() throws Exception {
    webClient.get().uri("/api/health")
      .exchange()
      .expectStatus().isOk()
      .expectBody(String.class)
      .isEqualTo("OK");
  }

}
