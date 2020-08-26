package nz.co.westpac.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

/**
 * @author Kefeng Deng (deng@51any.com)
 */
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class PostDto {
  private long userId;
  private long id;
  private String title;
  private String body;
}
