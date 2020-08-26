package nz.co.westpac.controller;

import lombok.extern.slf4j.Slf4j;
import nz.co.westpac.dto.CommentDto;
import nz.co.westpac.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

/**
 * @author Kefeng Deng (deng@51any.com)
 */
@RestController
@Slf4j
public class CommentController extends BaseApiController {

  private final CommentService commentService;

  @Autowired
  public CommentController(CommentService commentService) {
    this.commentService = commentService;
    log.debug("CommentController instantiated");
  }

  @GetMapping("/posts/{postId}/comments")
  public Flux<CommentDto> getCommentsByPostId(@PathVariable("postId") long postId) {
    log.debug("Received a request to fetch all comments with post ID '{}'", postId);
    return this.commentService.getCommentsByPostId(postId);
  }

}
