package nz.co.westpac;

import lombok.extern.log4j.Log4j2;
import nz.co.westpac.config.JsonPlaceholderConfig;
import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.web.reactive.config.EnableWebFlux;

/**
 * @author Kefeng Deng (deng@51any.com)
 */
@SpringBootApplication
@EnableWebFlux
@Log4j2
@EnableConfigurationProperties(JsonPlaceholderConfig.class)
public class Application {

  public static void main(String[] args) {
    SpringApplication app = new SpringApplication(Application.class);
    app.setBannerMode(Banner.Mode.OFF);
    app.run(args);
    log.info("Server is ready ...");
  }

}
