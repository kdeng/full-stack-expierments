package nz.co.westpac.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;

/**
 * @author Kefeng Deng (deng@51any.com)
 */
@RequestMapping(path = "/api")
@Slf4j
public abstract class BaseApiController {

  @ExceptionHandler({Exception.class})
  public ResponseEntity handleException(Exception ex, WebRequest request) {
    log.error("Unexpected error with request '{}'", ((ServletWebRequest) request).getRequest().getRequestURI(), ex);
    /**
     * @TODO:
     * we need to return more meaningful error code rather than such general internal server error code.
     */
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
  }

}
