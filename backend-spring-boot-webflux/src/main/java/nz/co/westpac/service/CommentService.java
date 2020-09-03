package nz.co.westpac.service;

import lombok.extern.slf4j.Slf4j;
import nz.co.westpac.config.JsonPlaceholderConfig;
import nz.co.westpac.dto.CommentDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

/**
 * @author Kefeng Deng (deng@51any.com)
 */
@Component
@Slf4j
public class CommentService {

  private final JsonPlaceholderConfig jsonPlaceholderConfig;

  private final WebClientService webClientService;

  @Autowired
  public CommentService(JsonPlaceholderConfig config, WebClientService service) {
    this.webClientService = service;
    this.jsonPlaceholderConfig = config;
    log.debug("CommentService instantiated");
  }

  public Flux<CommentDto> getCommentsByPostId(long postId) {
    return webClientService.fetchRemoteData(
      String.format(jsonPlaceholderConfig.getCommentApi(), postId),
      CommentDto.class);
  }

}
