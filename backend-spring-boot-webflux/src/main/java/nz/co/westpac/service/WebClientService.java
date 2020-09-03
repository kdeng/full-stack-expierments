package nz.co.westpac.service;

import lombok.extern.slf4j.Slf4j;
import nz.co.westpac.config.JsonPlaceholderConfig;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

/**
 * A common service to wrap {@link WebClient} instance
 *
 * @author Kefeng Deng (deng@51any.com)
 */
@Service
@Slf4j
public class WebClientService {

  protected final WebClient webClient;

  public WebClientService(JsonPlaceholderConfig config) {
    this.webClient = buildWebClient(config.getBaseUrl());
    log.debug("WebClientService instantiated");
  }

  public <T> Flux<T> fetchRemoteData(String uri, Class<T> bodyType) {
    return webClient
      .method(HttpMethod.GET)
      .uri(uri)
      .retrieve()
      .bodyToFlux(bodyType);
  }

  private WebClient buildWebClient(String baseUrl) {
    return WebClient.create(baseUrl);
  }

}
