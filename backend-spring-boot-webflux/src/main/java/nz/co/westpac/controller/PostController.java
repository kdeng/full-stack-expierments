package nz.co.westpac.controller;

import lombok.extern.slf4j.Slf4j;
import nz.co.westpac.dto.PostDto;
import nz.co.westpac.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

/**
 * @author Kefeng Deng (deng@51any.com)
 */
@RestController
@Slf4j
public class PostController extends BaseApiController {

  private final PostService postService;

  @Autowired
  public PostController(PostService postService) {
    this.postService = postService;
    log.debug("PostController instantiated");
  }

  @GetMapping("/posts")
  public Flux<PostDto> getPosts() {
    log.debug("Received a request to get all posts");
    return this.postService.getPosts();
  }

}
