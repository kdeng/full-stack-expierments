package nz.co.westpac.service;

import lombok.extern.slf4j.Slf4j;
import nz.co.westpac.config.JsonPlaceholderConfig;
import nz.co.westpac.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

/**
 * @author Kefeng Deng (deng@51any.com)
 */
@Component
@Slf4j
public class PostService {

  private final JsonPlaceholderConfig jsonPlaceholderConfig;

  private final WebClientService webClientService;

  @Autowired
  public PostService(JsonPlaceholderConfig config, WebClientService service) {
    this.jsonPlaceholderConfig = config;
    this.webClientService = service;
    log.debug("PostService instantiated");
  }

  public Flux<PostDto> getPosts() {
    return webClientService.fetchRemoteData(jsonPlaceholderConfig.getPostApi(), PostDto.class);
  }


}
