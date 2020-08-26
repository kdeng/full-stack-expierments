package nz.co.westpac.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Kefeng Deng (deng@51any.com)
 */
@RestController
public class HealthController extends BaseApiController {

  @GetMapping("health")
  public ResponseEntity healthCheck() {
    return ResponseEntity.ok("OK");
  }

}
