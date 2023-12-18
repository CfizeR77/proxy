function FindProxyForURL(url, host)
{
  if (shExpMatch(url, "*")) {
    return "SOCKS localhost:8080";
  } else {
    return "DIRECT";
  }
}
