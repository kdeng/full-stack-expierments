package nz.co.westpac.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * @author Kefeng Deng (deng@51any.com)
 */
@Data
@ConfigurationProperties(prefix = "jsonplaceholder")
public class JsonPlaceholderConfig {
  private String baseUrl;
  private String postApi;
  private String commentApi;
}
