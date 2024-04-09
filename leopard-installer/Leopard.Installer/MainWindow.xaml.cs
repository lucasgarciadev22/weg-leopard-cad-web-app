using System;
using System.Diagnostics;
using System.Threading.Tasks;
using System.Windows;

namespace Leopard.Installer
{
    public partial class MainWindow : Window
    {
        private const string INSTALLER_PATH = @"\\fseng.weg.net\apps$\_NONSTD\WDS_DSE\APPS\LEOPARD_SWIG\setup-leopard-swig-latest.exe";
        private const string SERIAL_KEY = "a{(VtvKz|eCvB1Ga";
        public MainWindow()
        {
            InitializeComponent();
        }

        private async void InstallButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                if (KeyTextBox.Text != SERIAL_KEY)
                {
                    MessageBox.Show(
                        "Invalid key. Please enter a valid key to continue.",
                        "Error",
                        MessageBoxButton.OK,
                        MessageBoxImage.Error);
                    return;
                }

                InstallButton.Content = "Installing...";

                await Task.Run(() =>
                {
                    ProcessStartInfo installerParams = new ProcessStartInfo
                    {
                        FileName = INSTALLER_PATH,
                        UseShellExecute = false
                    };

                    Process installer = Process.Start(installerParams);

                    installer.WaitForExit();
                });

                MessageBox.Show(
                    "Installation completed successfully!",
                    "Installation Completed",
                    MessageBoxButton.OK,
                    MessageBoxImage.Information);

                InstallButton.Content = "Installed!";
                InstallButton.IsEnabled = false;
            }
            catch (Exception ex)
            {
                MessageBox.Show(
                    $"Error starting installation: {ex.Message}",
                    "Error",
                    MessageBoxButton.OK,
                    MessageBoxImage.Error);
            }
        }

        private void KeyTextBox_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {
            string inputText = KeyTextBox.Text;
            InstallButton.IsEnabled = !string.IsNullOrEmpty(inputText) && inputText.Length >= 16;
        }
    }
}
